var coffeeShop = {
  beans: 40,
  money: 10,

  drinks: {
    latte: {
      price:5, beanRequierements: 10
    },
    americano: {
      price:5, beanRequierements: 5
    },
    doubleShot: {
      price:5, beanRequierements: 15
    },
    frenchPress: {
        price:5, beanRequierements: 12
      }
    },

  makeDrink: function(drinkType) {
    this.beans -= this.drinks[drinkType].beanRequierements;
    console.log("Success!Here is your " + drinkType+ ". New beans amount is " + this.beans);  
  },

  buyDrink: function(drinkType) {
    if (!(drinkType in this.drinks)) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    if (this.drinks[drinkType].beanRequierements > this.beans) {
      console.log('Not enough beans to make ' + drinkType + '. Need ' + 
      this.drinks[drinkType].beanRequierements + ', but only have ' + this.beans);
      return;
    }
    this.money += this.drinks[drinkType].price;
    this.makeDrink(drinkType);
  },

  buySupplies: function(numBeans){
    beanPrice = 2;
    if (this.money < beanPrice * numBeans) {
      console.log("not enough money to buy " + numBeans + " beans.");
      return;
    }
    this.beans += numBeans;
    this.money -= numBeans * beanPrice;
    console.log("Success. New beans num is " + this.beans + ". New money amount is " + this.money);
  }
  }



coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); // non-existent case
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); // not enough beans case
coffeeShop.buySupplies(50);// Not enough money case
coffeeShop.buySupplies(2);
coffeeShop.buyDrink("frenchPress");