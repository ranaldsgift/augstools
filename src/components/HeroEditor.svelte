<style>
    .hero-overlay {
    background-image: url('../images/homebrew/hero_overlay.png');
    gap: 10px;
}
.homebrew-template-container.hero-template {
    height: 566px;
    width: 700px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;
    position: relative;
}

.hero-overlay, .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.hero-background {
    background: var(--background-color);
}

@font-face {
    font-family: 'bangersregular';
    src: url('../fonts/bangers-regular-webfont.woff2') format('woff2'),
         url('../fonts/bangers-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'smackattack_bbregular';
    src: url('../fonts/smackattackbb_reg-webfont.woff2') format('woff2'),
         url('../fonts/smackattackbb_reg-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

.hero-ability {
    position: absolute;
    top: 145px;
    left: 395px;
    width: 300px;
    display: grid;
    grid-row-gap: 2px;
}

span {
    border: none;
    font-family: bangersregular;
    font-size: 32px;
    text-align: center;
    background: none;
}

.hero-ability-description {
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-family: smackattack_bbregular;    
    resize: none;
    height: 250px;
    text-align: center;
    overflow: hidden;
    background: none;
    max-width: 300px;
}

.hero-stats {
    position: absolute;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 56px 54px 55px 54px 63px;
    top: 70px;
    left: 350px;
}

.hero-stats span {
    color: #fff;
    width: 50px;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
}

span.hero-stat-health {
    position: absolute;
    color: #000;
    top: -40px;
    text-shadow: none;
    right: 8px;
}

span.hero-stat-awaken {
    font-size: 20px;
    margin-left: 12px;
    text-align: center;
    width: 30px;
    display: block;
    margin-top: 2px;
}

.hero-information {
    position: absolute;
    display: grid;
    grid-template-areas:
        "icon name"
        "icon factions";
    grid-template-columns: 80px 238px;
    grid-template-rows: 50px 30px;
    top: 10px;
    left: 10px;
    align-items: end;
    grid-column-gap: 10px;
}

.hero-icon {
    grid-area: icon;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.hero-name {
    grid-area: name;
    text-align: left;
    font-size: var(--font-size);
    align-self: end;
}

.hero-factions {
    grid-area: factions;
    font-size: 20px;
    text-align: left;
    align-self: start;
}

.hero-image {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 388px;
    height: 485px;
    background-repeat: no-repeat;
    background-position: var(--left) var(--top);
    background-size: var(--size);
}

.hero-image input {
    font-size: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

h2 {
    margin: 0;
}

.hero-dice {
    position: absolute;
    bottom: 30px;
    left: 385px;
    display: grid;
    grid-template-columns: repeat(6, 40px);
    grid-template-rows: 40px;
    grid-column-gap: 10px;
}

.hero-dice>div:nth-child(1) {
    margin-top: 5px;
}
.hero-dice>div:nth-child(2) {
    margin-top: 4px;
}
.hero-dice>div:nth-child(3) {
    margin-top: 3px;
}
.hero-dice>div:nth-child(4) {
    margin-top: 2px;
}
.hero-dice>div:nth-child(5) {
    margin-top: 1px;
}
.hero-dice>div:nth-child(6) {
    margin-top: 0px;
}
.hero-dice>div {
    height: 35px;
    width: 35px;
}
.hero-dice .icon {
    height: 39px;
    width: 39px;
    background-size: contain;
    position: absolute;
}

.icon[data-icon='melee'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/melee.png');
}
.icon[data-icon='double-melee'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/double_melee.png');
}
.icon[data-icon='range'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/range.png');
}
.icon[data-icon='double-range'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/double_range.png');
}
.icon[data-icon='move'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/move.png');
}
.icon[data-icon='double-move'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/double_move.png');
}
.icon[data-icon='block'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/block.png');
}
.icon[data-icon='block-melee'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/block_melee.png');
}
.icon[data-icon='block-range'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/block_range.png');
}
.icon[data-icon='block-move'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/block_move.png');
}
.icon[data-icon='focus'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/focus.png');
}
.icon[data-icon='chi'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/chi.png');
}
.icon[data-icon='wild'] {
    background-image: url('../images/homebrew/wild.png');
}
.icon[data-icon='one-time-use'] {
    background-image: url('../images/homebrew/one_time_use.png');
}
.icon[data-icon='persistent'] {
    background-image: url('../images/homebrew/persistent.png');
}
.icon[data-icon='health'], .icon[data-icon='health'][data-type='tmnt'][data-inverted='false'] {
    background-image: url('../images/homebrew/tmnt/health.png');
}
.icon[data-icon='arrow_up'] {
    background-image: url('../images/homebrew/arrow_up.png');
}
.icon[data-icon='arrow_down'] {
    background-image: url('../images/homebrew/arrow_down.png');
}
.icon[data-icon='skill'] {
    background-image: url('../images/homebrew/skill.png');
}

.template-options {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
}
.template-options>div {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, minmax(30px, max-content));
    grid-auto-columns: 100px;
    grid-column-gap: 10px;
}
.background {
    background-color: var(--background-color);
    position: absolute;
    width: 35px;
    height: 35px;
    border: 2px
 solid var(--border-color);
    border-radius: 5px;
    box-sizing: content-box;
}

.hero-dice[data-inverted='true'] .icon {
    filter: invert(1);
}
#saveHero {
    cursor: pointer;
    width: 100px;
}

.saved-template-container>canvas:nth-child(n+2) {
    display: none;
}

.image-settings {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    grid-auto-columns: 100px;
    grid-column-gap: 10px;
}

.template-options label, .image-settings label {
    align-self: end;
    font-family: 'bangersregular';
    padding: 5px;
    background: #4caf50;
    height: calc(100% - 10px);
    border-radius: 5px 5px 0 0;
    outline: 1px solid black;
    text-align: center;
    align-content: center;
    display: grid;
}

input[type='color'], .invert-color-container {
    height: 100%;
    width: 100%;
}

.invert-color-container {
    display: grid;
    align-content: center;
    justify-content: center;
    background: #673ab7;
}

input, .invert-color-container, select, textarea {
    outline: 1px solid black;
    border-radius: 0 0 5px 5px;
    border: none;
}
.hero-information-options {
    grid-template-columns: 200px 100px 200px 200px 500px;
}
.homebrew-template-container {
    line-height: 1;
}
</style>

<script>
    import { bind } from "svelte/internal";

    let heroMoveStat = 1;

    const handleStatIncrease = (e) => {
        let currentStat = parseInt(e.target.innerHTML);
        e.target.innerHTML = `${++currentStat}`;
    }

    const handleStatDecrease = (e) => {
        let currentStat = parseInt(e.target.innerHTML);
        e.target.innerHTML = `${--currentStat}`;
    }

    const handleEdit = (e) => {
/*         let edit = prompt('Enter the value for the move stat', heroStat);
        if (edit) {
            heroStat = edit;
        } */
    }
</script>

<div style="display: flex; column-gap: 10px; row-gap: 10px; flex-wrap: wrap;">
    <div class="homebrew-template-container hero-template tmnt-icon">
      <div class="hero-background" style="--background-color: #646464;"></div>
      <div class="hero-overlay"></div>
      <div class="hero-image" style="--left: 0px; --top: 0px; --size: 100%;"></div>
      <div class="hero-stats">
        <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-move">1</span>
        <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-attack">1</span>
        <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-block">1</span>
        <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-skill">1</span>
        <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-focus">1</span>
        <div>
          <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-health">1</span>
          <span on:contextmenu|preventDefault={handleStatDecrease} on:click={handleStatIncrease} class="hero-stat-awaken">1</span>
        </div>
      </div>
      <div class="hero-information">
        <div class="hero-icon">
        </div>
        <span style="--font-size: 40px" class="hero-name justify-end" placeholder="Hero Name" type="text">Hero Name</span>
        <span class="hero-factions" placeholder="Hero Factions" type="text">Hero Factions</span>
      </div>
      <div class="hero-ability">
        <span class="hero-ability-name" placeholder="Ability Name">Ability Name</span>
        <span class="hero-ability-description" placeholder="Ability description"></span>
      </div>
      <div class="hero-dice" data-inverted="false" style="--background-color: #3f51b5; --border-color: #000;">
        <div>
          <div class="background"></div>
          <div class="icon" data-icon="move" data-type="tmnt" data-inverted="false"></div>
        </div>
        <div>
          <div class="background"></div>
          <div class="icon" data-icon="melee" data-type="tmnt" data-inverted="false"></div>
        </div>
        <div>
          <div class="background"></div>
          <div class="icon" data-icon="range" data-type="tmnt" data-inverted="false"></div>
        </div>
        <div>
          <div class="background"></div>
          <div class="icon" data-icon="double-range" data-type="tmnt" data-inverted="false"></div>
        </div>
        <div>
          <div class="background"></div>
          <div class="icon" data-icon="block" data-type="tmnt" data-inverted="false"></div>
        </div>
        <div>
          <div class="background"></div>
          <div class="icon" data-icon="chi" data-type="tmnt" data-inverted="false"></div>
        </div>
      </div>
    </div>
    <div class="saved-template-container"></div>
  </div>