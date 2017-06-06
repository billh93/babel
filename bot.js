status.command({
    name: "reply",
    title: "Reply",
    description: "Helps you with quick replies",
    color: "#0000ff",
    params: [
        {
            name: "reply",
            type: status.types.TEXT,
            suggestions: replySuggestions
        }
    ]
});

status.command({
    name: "hello",
    title: "HelloBot",
    description: "Helps you say hello",
    color: "#CCCCCC",
    preview: function(params) {
        var text = status.components.text({
            style: {
                marginTop: 5,
                marginHorizontal: 0,
                fontSize: 14,
                fontFamily: "font",
                color: "black"
            }
        }, "Hello from the other side!");

        return {markup: status.components.view({}, [text])};
    }
});

function suggestionsContainerStyle(suggestionsCount) {
    return {
        marginVertical: 1,
        marginHorizontal: 0,
        keyboardShouldPersistTaps: "always",
        height: Math.min(150, (56 * suggestionsCount)),
        backgroundColor: "white",
        borderRadius: 5,
        flexGrow: 1
    };
}
var suggestionSubContainerStyle = {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001f"
};

var valueStyle = {
    marginTop: 9,
    fontSize: 14,
    fontFamily: "font",
    color: "#000000de"
};

function replySuggestions() {
    var suggestions = ["Hey", "What's up?", "What are you doing?", "I'm on my way!", "I'll be right back!", "Bye"].map(function(entry) {
        return status.components.touchable({
            onPress: status.components.dispatch([status.events.SET_VALUE, entry])
        }, status.components.view(suggestionsContainerStyle, [status.components.view(suggestionSubContainerStyle, [status.components.text({
                    style: valueStyle
                }, entry)])]));
    });

    // Let's wrap those two touchable buttons in a scrollView
    var view = status.components.scrollView(suggestionsContainerStyle(2), suggestions);

    // Give back the whole thing inside an object.
    return {markup: view};
}
