// set fillters on child table field
frm.set_query("track","schedule", (doc,cdt,cdn) => {
			return {
				filters :{
					// event : frm.doc.name
          childField /*<< the field the fillter should be on*/ : frm.doc.PartentField  // << the fillter
        }
      }
})
