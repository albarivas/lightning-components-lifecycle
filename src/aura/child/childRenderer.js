({
	render : function(component, helper) {
    	var ret = this.superRender();
	    console.log('child render - title: ' + component.get("v.childtitle"));
    	return ret;
	},
    rerender : function(component, helper){
        this.superRerender();
        console.log('child rerender - title: ' + component.get("v.childtitle"));
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
 		console.log('child afterRender - title: ' + component.get("v.childtitle"));
    },
    unrender: function () {
        this.superUnrender();
        console.log('child unrender');
    }
})