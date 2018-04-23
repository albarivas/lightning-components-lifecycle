({
	render : function(component, helper) {
    	var ret = this.superRender();
	    console.log('grandson render - title: ' + component.get("v.grandsontitle"));
    	return ret;
	},
    rerender : function(component, helper){
        this.superRerender();
        console.log('grandson rerender - title: ' + component.get("v.grandsontitle"));
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
 		console.log('grandson afterRender - title: ' + component.get("v.grandsontitle"));
    },
    unrender: function () {
        this.superUnrender();
        console.log('grandson unrender');
    }
})