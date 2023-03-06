$(document).ready(function() {

    
    $('form').submit(function(e) {
        e.preventDefault()
        
        var address=$('#address').val()
        var password=$('#password').val()
        
        if (address==='') {
            $('#address').addClass('is-invalid')
        } else if(address.indexOf('@')==-1) {
            $('#address').addClass('is-invalid')
            $('#indice').text('Entrer un email valide')
        } else {
            $('#address').removeClass('is-invalid')
        }
        if (password==='') {
            $('#password').addClass('is-invalid')
        } else {
            $('#password').removeClass('is-invalid')
        }
    })
})