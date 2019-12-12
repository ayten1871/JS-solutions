// the global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
var winterComing = urlSlug(globalTitle);
//.split(\/s+\)
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

Tasks:
urlSlug("Winter Is Coming") should return "winter-is-coming".

urlSlug(" Winter Is  Coming") should return "winter-is-coming".

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".

urlSlug("Hold The Door") should return "hold-the-door".
