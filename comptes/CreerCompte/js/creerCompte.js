$(document).ready(function() {
    
    $('form').submit(function(e) {
        e.preventDefault()

        var nom=$('#Nom').val()
        var prenom=$('#prenom').val()
        var tel=$('#telephone').val()
        var email=$('#email').val()
        var town=$('#town').val()
        var reference=$('#reference').val()
        var avis=$('#avis').val()

        if (nom==='' || prenom==='' || town==='' || reference==='' || avis==='') {
            $('#Nom').addClass('is-invalid')
            $('#prenom').addClass('is-invalid')
            $('#town').addClass('is-invalid')
            $('#reference').addClass('is-invalid')
            $('#avis').addClass('is-invalid')
            $('#sms').text('Tout ces champs obligatoires')
        } else {
            $('#Nom').removeClass('is-invalid')
            $('#prenom').removeClass('is-invalid')
            $('#town').removeClass('is-invalid')
            $('#reference').removeClass('is-invalid')
            $('#avis').removeClass('is-invalid')
        }
    })
})