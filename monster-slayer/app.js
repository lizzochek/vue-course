const getRandomValue = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      //attack value is between 5 and 12
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
      this.currentRound++;
    },
    attackPlayer() {
      //attack value is between 8 and 15
      this.playerHealth -= getRandomValue(8, 15);
    },
    specialAttackMonster() {
      this.monsterHealth -= getRandomValue(10, 25);
      this.attackPlayer();
      this.currentRound++;
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);

      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.attackPlayer();
      this.currentRound++;
    },
  },
}).mount("#game");
