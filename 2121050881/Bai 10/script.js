var danhSachvid = [
    {
        id: 1,
        ten: "Anh không muốn nó dễ dàng",
        duongdananh: "",
        duongdanYoutube: "https://www.youtube.com/embed/UWcLqTcYxoI?si=WO9e0XBsGvzFMmRB" 
    }
    {
        id: 2,
        ten: "Nhin ke thu cua t",
        duongdananh: "",
        duongdanYoutube: "https://www.youtube.com/embed/UWcLqTcYxoI?si=WO9e0XBsGvzFMmRB" 
    }
    {
        id: 3,
        ten: "Anh không muốn nó dễ dàng",
        duongdananh: "",
        duongdanYoutube: "https://www.youtube.com/embed/UWcLqTcYxoI?si=WO9e0XBsGvzFMmRB" 
    }
    {
        id: 4,
        ten: "Anh không muốn nó dễ dàng",
        duongdananh: "",
        duongdanYoutube: "https://www.youtube.com/embed/UWcLqTcYxoI?si=WO9e0XBsGvzFMmRB" 
    }
];
function choBai(id){
    for (let i = 0;i<danhSachvid.length;i++){
        if(danhSachvid[1].id==id){
            document.getElementsByClassName("video")[0].src= danhSachvid[i];
        }
    }
}