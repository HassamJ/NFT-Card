// let newNFT = {
//     bgcolor: 'red',
//     name: 'DOG',
//     owner : 'Hassam',
// }

// document.getElementById('owner').innerText = 'Abel Mendoza'


let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    }
}



document.getElementById('owner').innerHTML = dog.otherData.owner 
document.body.style.backgroundColor = dog.backgroundColor 
document.getElementById("price").innerHTML= dog.price
document.getElementById('text').innerHTML = dog.description
document.getElementById('NFT').src= dog.nft
//document.getElementsByClassName('.container').style.backgroundColor= dog.cardColor
document.querySelector('.container').style.backgroundColor = dog.cardColor
document.getElementById('days').innerHTML = dog.otherData.daysLeft 
document.getElementById('profile').src = dog.otherData.profileImg
document.getElementById('texts').innerHTML = dog.name


document.getElementById("NFT").addEventListener("click",function(){
    document.getElementById("NFT").src = "https://media-exp1.licdn.com/dms/image/C4D03AQE5q7rMuB44Uw/profile-displayphoto-shrink_200_200/0/1638316957507?e=1650499200&v=beta&t=ofX0g4zLdGzZ2rYvOYh2Uvwgl6CfpzMEHbXFTai0wpo"
    
})


document.getElementById('texts').addEventListener("click",function(){
   
    if(document.getElementById('texts').style.color == 'green') {
        document.getElementById('texts').style.color = 'white'
        
    } else {
        document.getElementById('texts').style.color = 'green'
    }
})