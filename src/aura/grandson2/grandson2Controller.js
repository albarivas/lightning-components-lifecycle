({
	doInit : function(component, event, helper) {
		console.log('grandson2 init - title: ' + component.get("v.grandson2title"));
    },
    
    setTitle: function(component, event, helper) {
        component.set("v.grandson2title", "Title set by grandson2!");
	}
})