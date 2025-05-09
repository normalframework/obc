// TimeManager.js
class TimeManager {
  static #now = 0;
  static #last = 0;

  static reset(newTime = 0) {
    this.#now = newTime;
    this.#last = newTime;
  }

  static advance(dt = 1) {
    this.#last = this.#now;
    this.#now += dt;
  }

  static get dt() {
    return this.#now - this.#last;
  }

  static get time() {
    return this.#now;
  }
}

module.exports = TimeManager;
