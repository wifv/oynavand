const AllProducts = () => {
  fetch("https://192.168.1.6:8080/", {
    method: "GET",
    headers: {
      Api_key: "",
      "Content-Type": "application/json"
    }
  })
  .then(response => {response.json()})
  .then((data): any => {
    console.log(data)
  })

  return (
    <div>
      
    </div>
  )
}

export default AllProducts
