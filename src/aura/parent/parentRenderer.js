({
	render : function(component, helper) {
    	var ret = this.superRender();
	    console.log('parent render - title: ' + component.get("v.title"));
    	return ret;
	},
    rerender : function(component, helper){
        this.superRerender();
        console.log('parent rerender - title: ' + component.get("v.title"));
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
 		console.log('parent afterRender - title: ' + component.get("v.title"));
    },
    unrender: function () {
        this.superUnrender();
        console.log('parent unrender');
    }
})