$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault()
        var nom=$('#nom').val()
        var email=$('#email').val()
        var phone=$('#telephone').val()
        var message=$('#avis').val()

        if (nom==='') {
            $('#nom').addClass('is-invalid')
        } else if(email==='') {
            $('#nom').removeClass('is-invalid')
            $ ('#email').addClass('is-invalid')
        } else if (phone==='') {
            $ ('#email').removeClass('is-invalid')
            $ ('#telephone').addClass('is-invalid')
        } else if (isNaN(parseFloat(phone))==true || phone.match(/[6][5-9][0-9][ -][0-9]{2}[ -][0-9]{2}[ -][0-9]{2}/g)==null) {
            $ ('#telephone').addClass('is-invalid')
        } else if (message==='') {
            $ ('#telephone').removeClass('is-invalid')
            $ ('#avis').addClass('is-invalid')
        } else {
            $ ('#avis').removeClass('is-invalid')
        }
    })
})