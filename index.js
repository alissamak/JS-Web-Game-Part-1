//renders images on page
function newImage(url, left, bottom){
    let image = document.createElement('img');
    image.src = url;
    image.style.position = 'fixed';
    image.style.left = left + 'px';
    image.style.bottom = bottom + 'px';
    document.body.append(image);
    return image;
}
//renders objects on page
function newItem(url, left, bottom){
    // let image = document.createElement('img');
    // image.src = url;
    // image.style.position = 'fixed';
    // image.style.left = left + 'px';
    // image.style.bottom = bottom + 'px';
    // document.body.append(image);
    let image = newImage(url, left, bottom)
    
    image.addEventListener('dblclick', function(){
        image.remove()
    })
}

//bonus
function background(url, left, bottom, width, height){
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w*100, bottom + h*100);
        } 
    }
}

let horizon = window.innerHeight / 1.75
let heightofSky = window.innerHeight - horizon
let heightofGrass = horizon

//recalling bonus background function
background('assets/sky.png', 0, horizon, window.innerWidth/100, heightofSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightofGrass/100)

//recalling image function
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//recalling item function
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)