import memesData from "../memesData.js"
function randomImage(){
    let r;
    let array=[]
    for (r in memesData.data.memes){
        array.push(memesData.data.memes[r]["url"]);
        }
        const rimage=array[Math.floor(Math.random() * array.length)];
        console.log(rimage);
    }


randomImage()
