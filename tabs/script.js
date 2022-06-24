const isArrowRightKey = ev => ev.key === 'ArrowRight' || ev.keyCode === 39;
const isArrowLeftKey = ev => ev.key === 'ArrowLeft' || ev.keyCode === 37;

class Tabs {
	constructor(element) {
		this.element = element;
		this.tabList = this.element.querySelector('[role="tablist"]');
		this.tabs = Array.from(this.tabList.querySelectorAll('[role="tab"]'));
		this.tabPanels = Array.from(this.element.querySelectorAll('[role="tabpanel"]'));
		this.current = new Object();
		this.#init();
	}

	#init() {
		this.tabs.forEach( tab => tab.addEventListener("click", () => this.#select(tab)));

		// Check if any tab if pre-selected. Otherwise, select the first tab.
		const preSelectedTab = this.tabs.find( tab => tab.getAttribute("aria-selected") === "true" );
		preSelectedTab
		? this.#select(preSelectedTab)
		: this.#select(this.tabs[0]);

		// Move with key arrows
		this.tabList.addEventListener("keydown", (e) => {
			if (isArrowLeftKey(e) || isArrowRightKey(e)) {
				let currentTabIndex = this.current.tabIndex;

				isArrowLeftKey(e) && currentTabIndex--;
				isArrowRightKey(e) && currentTabIndex++;

				if (currentTabIndex < 0) currentTabIndex = this.tabs.length - 1;
				if (currentTabIndex > this.tabs.length -1) currentTabIndex = 0;

				this.#select(this.tabs[currentTabIndex]);
				this.tabs[currentTabIndex].focus();
			}
		})
	}

	#select(tab) {
		const panel = this.tabPanels.find( panel => panel.id === tab.getAttribute("aria-controls") );

		this.current.tab = tab;
		this.current.tabIndex = this.tabs.findIndex( tab => tab === this.current.tab );
		this.current.panel = panel;

		// Active tab
		tab.setAttribute("aria-selected", true);
		tab.setAttribute('tabindex', 0);

		// Active panel
		panel.hidden = false;
		panel.setAttribute("aria-expanded", true)

		// Unselect other tabs
		const otherTabs = this.tabs.filter( el => el.id !== tab.id);
		otherTabs.forEach( tab => {
			tab.setAttribute("aria-selected", false)
			tab.setAttribute('tabindex', -1);
		});

		// Hide other panels
		const otherPanels = this.tabPanels.filter( panel => panel.id !== tab.getAttribute("aria-controls") );
		otherPanels.forEach( panel  => {
			panel.hidden = true
			panel.setAttribute("aria-expanded", false)
		});
	}

	selectById(tabId, focus = false) {
		const tab = this.tabs.find( tab => tab.id === tabId );
		if (tab) {
			this.#select(tab);
			focus && tab.focus()
		} else {
			throw new Error(`tab with id ${tabId} not found in this tablist.`);
		}
	}

	selectByIndex(index, focus = false) {

		if (typeof index === 'number') {

			let validIndex = index - 1
			if (index === 0) {
				validIndex = 0
			}
			else if ( index < 0) {
				Math.abs(index) > this.tabs.length ? validIndex = 0 : validIndex = this.tabs.length + index;
			}
			else if (index > this.tabs.length) {
				validIndex = this.tabs.length - 1
			}

			const tab = this.tabs[validIndex];
			this.#select(tab);
			focus && tab.focus()
		}
		else {
			throw new Error(`index must be a number.`);
		}
	}
}

const TabsElements = Array
	.from(document.querySelectorAll(".Tabs"))
	.map((element) => new Tabs(element))

	const myTab = TabsElements.find(tab => tab.element.id === "proba");
