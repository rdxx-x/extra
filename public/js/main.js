var socket = io()
socket.on('info', data => {
    document.getElementById('tiempo').innerHTML = (new Date()).toTimeString().split(' ')[0]
    let div = document.getElementById('salida')
    div.innerHTML = ''
    for (const key of Object.keys(data)) {
        div.innerHTML +=
            `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <h4 class="card-title">${key.toUpperCase()}</h4>
                        <p class="card-text">${data[key]}</p>
                    </div>
                </div>
            </div>`
    }
})