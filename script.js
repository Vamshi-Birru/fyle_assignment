$(document).ready(function() {
    // Contact Us Button Click
    $('#contactBtn').on('click', function() {
        $('#contactModal').modal('show');
    });

    // Form Submission
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'https://your-getform-endpoint.com', // Replace with your Getform endpoint
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('Error submitting form. Please try again.');
            }
        });
    });

    // Slider Navigation
    $('#slider').carousel({
        interval: 2000
    });

    // Project Image Change on Click
    $('#projectContent .list-group-item').on('click', function() {
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
    });

    // Highlight on Hover
    $('.list-group-item').hover(
        function() {
            $(this).addClass('list-group-item-dark');
        },
        function() {
            $(this).removeClass('list-group-item-dark');
        }
    );
});
