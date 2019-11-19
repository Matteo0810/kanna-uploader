$(document).ready(() => {

    $('#video').change(() => {
        const file = $('#video')[0].files[0]? $('#video')[0].files[0] : null;
        sendUploaderForm()
    });
    $('body').delegate('#upload_quit', 'click', () => closeUploaderForm())
    $('body').delegate('#submit', 'click', () => {
        
    })

});

//show upload form
function sendUploaderForm() {
    $('body').append(`<div class="upload_form_div">
        <div class="upload_form">
            <span id="upload_quit" class="quit">&times;</span>
            <h1 class="form_title">Upload video</h1>
            <input type="text" id="name" class="input_name" placeholder="Name of your video" />
            <small class="info_text"><i class="fas fa-exclamation-triangle"></i> Max: 1GB</small>
            <input type="submit" id="submit" class="input_submit" value="Upload" />
        </div>
    </div>`)
}

//close upload form
function closeUploaderForm() {
    $('.upload_form_div').fadeOut(500, () => {
        $('.upload_form_div').remove();
        $("body").load(`${window.location.href}#box`);
    })
}

//upload and storage the video
function uploadVideo() {
    $('.profil_file').addClass('disabled')
    file = $("#avatar")[0].files[0],
        data = new FormData();
    data.append("doc", file);
    $.ajax({
        type: "POST",
        url: `./src/assets/php/POST/profil.php`,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: () => {
            $(location).attr('href', '/profil')
        },
        error: (xhr) => {
            console.log(xhr.responseText)
        }
    });
}