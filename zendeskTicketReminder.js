javascript: (function () {

    if ((window.location.href).indexOf('zendesk.com/agent/tickets/') == -1){
        alert("This needs to be run on a Zendesk ticket.");
    }else{
        raw_source = document.documentElement.outerHTML;

        var beforeText='hcVeLQ StyledTextInput-sc-k12n8x-0 fGPLUj" value="';

        if (raw_source.indexOf(beforeText) == -1){
            alert("This helper didn't find the Due Date Field.");
        }else{
            
            var pos = raw_source.indexOf(beforeText) + beforeText.length;

            var endText = '"><div';

            var dateText = raw_source.substring(pos, raw_source.indexOf(endText, pos));

            console.log("here is the dateText:");

            console.log(dateText);

            var eventDate = new Date(Date.parse(dateText));

            var eventYear = eventDate.getFullYear();
            console.log(eventYear);
            var eventMonth = ("0" + (eventDate.getMonth()+1)).slice(-2);
            console.log(eventMonth);
            var eventDay = ("0" + eventDate.getDate()).slice(-2);
            console.log(eventDay);

            var documentTitle = encodeURIComponent(document.title);
            
            var newCalLink="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+documentTitle+"&details="+window.location.href+"&dates="+eventYear+eventMonth+eventDay+"/"+eventYear+eventMonth+eventDay;
            
            console.log(newCalLink);

            window.open(newCalLink, '_blank');
            }

        }
        
})();