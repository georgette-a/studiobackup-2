import { createStore } from 'vuex'

export default createStore({
  state: {
    svgString:'<?xml version="1.0" encoding="utf-8"?> {{haha}} <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 841.89" style="enable-background:new 0 0 595.28 841.89;" xml:space="preserve"><g id="Background"><rect style="fill:#3A3A3A;" width="595.28" height="841.89"/></g><g id="Line_1"><text transform="matrix(1 0 0 1 125.4193 352.0894)" style="fill:#FDC506; font-family:"Montserrat-ExtraBold;" font-size:56px;">{{welcome to}}</text><text transform="matrix(1 0 0 1 149.6187 406.8807)" style="fill:#FFFFFF; font-family:"Montserrat-ExtraBold"; font-size:56px;">{{the studio!}}</text></g></svg>',
		ht_size:['14','16','18','20','24',"28","30"],
		ht_color: '#ffffff',
		bg_colour: '#3a3a3a',
		ht2_colour: '#ffc600',
		fontlist: null,
    line2:'',
	
		
		fstyle:["Extra Light","Light","Regular","Bold","ExtraBold","Black"]
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
