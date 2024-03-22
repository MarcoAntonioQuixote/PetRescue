let flamingo = {
    name: 'Rio',
    age: 3,
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQZ4nGLfehFcEs8swsyXKYKB1zz5seDNEFQu93B-4LBocKln1NlQwQ1V8eTcIz8JRmkJqzYdZd9jtlQTsI',
    isFixed: false,
    type: 'flamingo'
}

const options = {
    method: 'POST',
    body: JSON.stringify(flamingo),
    headers: {
        'content-type': 'application/json'
    }
}


class PetRescue {
    constructor() {
        this.url = 'https://65fcd5649fc4425c6530c5b6.mockapi.io';
        this.pets = [];
        this.loadPets();
    }

    loadPets() {
        fetch(`${this.url}/pets`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.pets = data;
                this.showPets();
            });
            
            this.showPets(); //doesn't really work here

        let button = document.getElementById('changeName');
        
        button.addEventListener('click', () => {
            
            this.updatePet();
        })
    }

    showPets() {
        console.log('running showPets')
        for (let pet of this.pets) {
            let name = document.createElement('h2');
            name.innerText = pet.name;
            document.body.append(name);
        }
    }

    updatePet(pet){ //hard coded here that we will update Rio
        console.log('running UP?')
        let change = {
            name: 'Rio de Janiero',
            age: 1000
        }
        fetch(`${this.url}/pets/14`, {
            body: JSON.stringify(change),
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    addPet() {

    }

    deletePet() {

    }
}


let pr = new PetRescue();

// we want to update Rio's name in the DB to be Rio de Janiero

//use the put http verb action

//Send an object that just updates the prop you want change

//addEventListern (grab it)

