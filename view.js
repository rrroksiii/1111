"use strict"

function MenuDevices (model) {
	this._model = model;
	this.viewInfo1 = document.getElementById("info1");
	this.viewInfo2 = document.getElementById("info2");
	this.btnOn = document.getElementById("on");
	this.btnOff = document.getElementById("off");
	this.btnRemove = document.getElementById("remove");
	this.btnAdd = document.getElementById("add");	
	this.formTv = document.getElementById("tvv");
}
MenuDevices.prototype.getModel = function() {
   return this._model;
}
MenuDevices.prototype.setModel = function(model) {
   this._model = model;
}
MenuDevices.prototype.start = function() {
   this.viewInfo1.innerHTML = this._model.info1();
   this.viewInfo2.innerHTML = this._model.info2();
   var self = this;
	this.btnOn.onclick = function () {
		self._model.on();
		self.viewInfo2.innerHTML = self._model.info2();
   };
   this.btnOff.onclick = function () {
		self._model.off();
		self.viewInfo2.innerHTML = self._model.info2();
   };
   this.btnRemove.onclick = function () {
		self.formTv.remove();
	}
	this.btnAdd.onclick = function () {
		self.formTvAdd = self.formTv.cloneNode(true);
		self.formTv.parentNode.insertBefore(self.formTvAdd, self.formTv);
		self.formTvAdd.addEventListener("click", cloneNode, true);
	}
	

}

