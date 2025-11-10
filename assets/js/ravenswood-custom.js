/**
 * Quinta Tia Dorothea Ravenswood - Custom JavaScript
 * Trabalho do Grupo 4 — Disciplina de Marketing, 10.º MBA ISAG — Portugal
 */

(function() {
	'use strict';

	/**
	 * Timeline Intersection Observer
	 * Anima os itens da timeline quando entram no viewport
	 */
	function initTimeline() {
		const timelineItems = document.querySelectorAll('.timeline-item');

		if (!timelineItems.length) return;

		// Opções do Intersection Observer
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.15
		};

		// Callback quando o item entra no viewport
		const observerCallback = (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					// Opcional: parar de observar após animação (performance)
					// observer.unobserve(entry.target);
				}
			});
		};

		// Criar observer
		const observer = new IntersectionObserver(observerCallback, observerOptions);

		// Observar cada item
		timelineItems.forEach(item => {
			observer.observe(item);
		});
	}

	/**
	 * Accordion Toggle
	 * Abre e fecha os accordions da ficha técnica
	 */
	window.toggleAccordion = function(headerElement) {
		const accordionItem = headerElement.parentElement;
		const content = accordionItem.querySelector('.accordion-content');
		const isActive = headerElement.classList.contains('active');

		// Fechar todos os accordions (opcional: remover para permitir múltiplos abertos)
		document.querySelectorAll('.accordion-header').forEach(header => {
			if (header !== headerElement) {
				header.classList.remove('active');
				header.nextElementSibling.classList.remove('active');
			}
		});

		// Toggle do accordion clicado
		if (isActive) {
			headerElement.classList.remove('active');
			content.classList.remove('active');
		} else {
			headerElement.classList.add('active');
			content.classList.add('active');
		}
	};

	/**
	 * Smooth Scroll para âncoras
	 * Melhora a navegação entre secções
	 */
	function initSmoothScroll() {
		const links = document.querySelectorAll('a[href^="#"]');

		links.forEach(link => {
			link.addEventListener('click', function(e) {
				const targetId = this.getAttribute('href');

				// Verificar se é uma âncora válida
				if (targetId === '#' || !targetId) return;

				const targetElement = document.querySelector(targetId);

				if (targetElement) {
					e.preventDefault();

					// Scroll suave
					targetElement.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});

					// Atualizar URL sem reload
					if (history.pushState) {
						history.pushState(null, null, targetId);
					}

					// Focus para acessibilidade
					targetElement.setAttribute('tabindex', '-1');
					targetElement.focus();
				}
			});
		});
	}

	/**
	 * Lazy Load de Imagens (fallback para navegadores sem suporte nativo)
	 * Nota: O HTML já usa loading="lazy", esta função é um fallback
	 */
	function initLazyLoad() {
		// Verificar suporte nativo
		if ('loading' in HTMLImageElement.prototype) {
			return; // Navegador suporta loading="lazy"
		}

		// Fallback para navegadores antigos
		const images = document.querySelectorAll('img[loading="lazy"]');

		const imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src || img.src;
					img.classList.add('loaded');
					observer.unobserve(img);
				}
			});
		});

		images.forEach(img => imageObserver.observe(img));
	}

	/**
	 * Acessibilidade: Gestão de focus no skip link
	 */
	function initSkipLink() {
		const skipLink = document.querySelector('.skip-link');

		if (skipLink) {
			skipLink.addEventListener('click', function(e) {
				const targetId = this.getAttribute('href');
				const targetElement = document.querySelector(targetId);

				if (targetElement) {
					e.preventDefault();
					targetElement.setAttribute('tabindex', '-1');
					targetElement.focus();

					// Scroll para o elemento
					targetElement.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
			});
		}
	}

	/**
	 * Melhorar acessibilidade dos accordions
	 */
	function initAccessibleAccordions() {
		const accordionHeaders = document.querySelectorAll('.accordion-header');

		accordionHeaders.forEach((header, index) => {
			// Adicionar atributos ARIA
			header.setAttribute('role', 'button');
			header.setAttribute('aria-expanded', 'false');
			header.setAttribute('aria-controls', `accordion-content-${index}`);
			header.setAttribute('tabindex', '0');

			const content = header.nextElementSibling;
			content.setAttribute('id', `accordion-content-${index}`);
			content.setAttribute('role', 'region');
			content.setAttribute('aria-labelledby', `accordion-header-${index}`);
			header.setAttribute('id', `accordion-header-${index}`);

			// Suporte para teclado (Enter e Space)
			header.addEventListener('keydown', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					toggleAccordion(this);

					// Atualizar aria-expanded
					const isExpanded = this.classList.contains('active');
					this.setAttribute('aria-expanded', isExpanded);
				}
			});

			// Atualizar ARIA ao clicar
			header.addEventListener('click', function() {
				setTimeout(() => {
					const isExpanded = this.classList.contains('active');
					this.setAttribute('aria-expanded', isExpanded);
				}, 50);
			});
		});
	}

	/**
	 * Performance: Reduzir animações se o utilizador preferir
	 */
	function respectMotionPreferences() {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (prefersReducedMotion.matches) {
			// Desativar animações suaves
			document.documentElement.style.setProperty('scroll-behavior', 'auto');

			// Adicionar classe para desativar transições CSS
			document.body.classList.add('reduce-motion');
		}
	}

	/**
	 * Inicialização
	 */
	function init() {
		// Aguardar DOM ready
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', init);
			return;
		}

		// Inicializar funcionalidades
		initTimeline();
		initSmoothScroll();
		initLazyLoad();
		initSkipLink();
		initAccessibleAccordions();
		respectMotionPreferences();

		// Log para debug (remover em produção)
		if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
			console.log('✓ Ravenswood Custom JS inicializado');
		}
	}

	// Executar inicialização
	init();

})();
