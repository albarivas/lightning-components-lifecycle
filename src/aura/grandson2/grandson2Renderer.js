({
	render : function(component, helper) {
    	var ret = this.superRender();
	    console.log('grandson2 render - title: ' + component.get("v.grandson2title"));
    	return ret;
	},
    rerender : function(component, helper){
        this.superRerender();
        console.log('grandson2 rerender - title: ' + component.get("v.grandson2title"));
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
 		console.log('grandson2 afterRender - title: ' + component.get("v.grandson2title"));
    },
    unrender: function () {
        this.superUnrender();
        console.log('grandson2 unrender');
    }
})