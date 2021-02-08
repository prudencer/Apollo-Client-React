const Joke = (props) => {
    const {icon_url, value} = props.joke
    return (
        <div style={{padding: 20}}>
        <div class="card" style={{borderRadius: 10, padding: 10, margin: "auto"}}>
          <img class="card-img-top" style={{margin: "auto",width: 150}} src={icon_url} alt={value}/>
          <div class="card-body">
            <p class="card-text">{value}</p>
          </div>
        </div>
        </div>
    )
}

export default Joke;