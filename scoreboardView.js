export default class scoreboardView {
  constructor(root, name, track1, track2, track3, track4, track5, track6, totalPoints) {
    this.root = root;
    this.root.innerHTML = `
			<div class="scoreboard">
				<div class="driverName">${name}</div>
				<div class="tracks">${track1}</div>
				<div class="tracks">${track2}</div>
				<div class="tracks">${track3}</div>
				<div class="tracks">${track4}</div>
				<div class="tracks">${track5}</div>
				<div class="tracks">${track6}</div>
				<div class="totalPoints">${totalPoints}</div>									
			</div>
		`;
  }

  update() {
  }
}
