$(function() {

    $('.console').on('click', function() {
        $('#input').focus();
    });

    $('#input').on('keydown', function search(e) {
        if (e.keyCode == 13) {

            var query = document.getElementById("input").value;


            $('#history').append('<span id="a" class="path">guest@</span>:<span id="b">bhoodengine.bh:</span><span id="c">$</span> ~ ' + $(this).val() + '<br/><br/>');

            if (query === 'help') {
                $('#history').append('<div id="help" class="desc"> <b>Availibe commands:</b> <br><br>about <br>contact <br>code_of_brothers <br>publications <br>interviews <br>missions <br><br></div>')
            } else if (query === "about") {
                $('#history').append('<div id="about" class="desc"> The Brotherhood is a counter-revolutionary organization working against the Oceanic Party to restore freedom, prosperity, and order to the nation and world beyond. Though few details can be mentioned here, we recruite members to launch espionage and sabotage missions, with the final aim of carrying out a successful coup in Airstrip One. <br><br></div>')
            } else if (query === "code_of_brothers") {
                $('#history').append('<div id="code_of_brothers" class="desc"> <b>THE CODE OF BROTHERS</b> <br>Revised and officialy adopted by the BrotherHood High Command on March 15, 1984. <ol> <li>Be prepared to take any action deemed necessary to further the aims of the Brotherhood.</li><br><li>Be prepared to be questioned by The Party, and not give up any key information.</li><br><li>Support the brotherhood to your fullest capabilities.</li><br><li>Be prepared to give your lives.</li><br><li>Be prepared to commit murder.</li><br><li>Be prepared to commit acts of sabotage which may cause the death of hundreds of innocent people.</li><br><li>Be prepared to betray your country to foreign powers.</li><br><li>Be prepared to cheat, to forge, to blackmail, to corrupt the minds of children, to distribute habit-forming drugs, to encourage prostitution, to disseminate venereal diseases - to do anything which is likely to cause demoralization and weaken the power of the Party.</li><br><li>Be prepared to lose your identity and live out the rest of your life as a waiter or a dock-worker.</li><br><li>Lasty, down with the Party!</li><br></ol> Ense petit placidam sub libertate quietem,<br>Fratres liberae Reipublicae</div><br>')
            } else if (query === "publications") {
                $('#history').append('<div id="publications" class="desc"> <b>recent publications:</b> <br><br><span id="b">PINNED ITEM: </span><a href="report.pdf">Declassified Report on the case of Winston Smith</a><br>Published to BHood Engine on April 4, 1990 by a verified user 🗸 <br><br><span id="b">PINNED ITEM: </span><a href="transcript.pdf">Interview Transcript with a new operative</a><br>Published to BHood Engine on April 28, 1990 by a verified user 🗸 <br><br></div>')
            } else if (query === "contact") {
                $('#history').append('<div id="contact" class="desc"> You do not have authorization to use this command. Please sign in as an administrator and relaunch the engine to proceed.</div><br>')
            } else {
                $('#history').append('<div id="error" class="desc"> <span id="error_msg">Error: BHE 3.8.1 does not recognise that command. Type "help" to see all valid commands and arguments.</span><br><br></div>')
            }

            // clear the input
            $('#input').val('');

        }
    });
});