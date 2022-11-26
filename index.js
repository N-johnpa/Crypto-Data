function getCryptoData () {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    fetch(url)
    .then((response)=>{
return response.json();
 })
    .then((data)=>{
console.log(data);

let fetchData = data;
if(fetchData.length > 0){
    var cryptoData = ""
}
// For Loop

fetchData.forEach((data)=>{
    cryptoData += "<tr>"
    cryptoData += `<td>  <img src="${data.image}">  </td>`;
    cryptoData += `<td> ${data.name} </td>`;
    cryptoData += `<td> ${data.symbol} </td>`;
    cryptoData += `<td> $${data.current_price} </td>`;
    cryptoData += `<td> $${data.market_cap_change_24h} </td>`;
    cryptoData += `<td> ${data.market_cap_change_percentage_24h}%  </td>`;
    cryptoData += `<td> Mkt Cap:$${data.market_cap} </td>`;"<tr>"
}) 
document.getElementById("data").innerHTML = cryptoData 
    })
}

getCryptoData();