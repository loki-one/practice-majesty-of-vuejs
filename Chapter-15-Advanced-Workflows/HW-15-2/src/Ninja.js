class Ninja {

  constructor(name) {
    this.name = name;
  }

  announce() {
    alert(`Ninja ${this.name} is here!`);
  }

}

new Ninja('Leonardo').announce();
