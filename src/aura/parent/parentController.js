({
	doInit : function(component, event, helper) {
        console.log('parent init - title: ' + component.get("v.title"));
	},
    setTitle: function(component, event, helper) {
        component.set("v.title", "Title set by parent!");
	}
})