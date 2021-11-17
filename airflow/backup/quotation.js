frappe.ui.form.on('Quotation', {
	refresh(frm) {
		// your code here
	}
});
frappe.ui.form.on('Quotation Item',"outlet_area",function(frm, cdt, cdn){
    var b = locals[cdt][cdn];
    var o__v_m__s ='';
    var outlet_area = b.outlet_area.split(' / ');
    var capacity_cfm = b.capacity_cfm.split(' / ');
    for (let val in outlet_area) {
        o__v_m__s += cstr(Math.round((flt(capacity_cfm[val])/flt(outlet_area[val])/196.8/flt(b.qty)) * 100) / 100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "o_v_m_s", o__v_m__s.slice(0,-3));
});
frappe.ui.form.on('Quotation Item',"qty",function(frm, cdt, cdn){
    var b = locals[cdt][cdn];
    if(b.fan_type == "Double Skin"){
    var o__v_m__s ='';
    var outlet_area = b.outlet_area.split(' / ');
    var capacity_cfm = b.capacity_cfm.split(' / ');
    for (let val in outlet_area) {
        o__v_m__s += cstr(Math.round((flt(capacity_cfm[val])/flt(outlet_area[val])/196.8/flt(b.qty)) * 100) / 100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "o_v_m_s", o__v_m__s.slice(0,-3));
    }
});
frappe.ui.form.on('Quotation Item',"capacity_cfm",function(frm, cdt, cdn){
    var d = locals[cdt][cdn];
    if(d.fan_type == "Double Skin"){
    var o__v_m__s ='';
    var outlet_area = d.outlet_area.split(' / ');
    var capacity_cfm = d.capacity_cfm.split(' / ');
    for (let val in outlet_area) {
        o__v_m__s += cstr(Math.round((flt(capacity_cfm[val])/flt(outlet_area[val])/196.8/flt(d.qty)) * 100) / 100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "o_v_m_s", o__v_m__s.slice(0,-3));
    }
    var capacity_cmh='';
    var capacity_cfm = d.capacity_cfm.split(' / ');
    for (let val in capacity_cfm) {
		capacity_cmh += cstr(Math.round(((flt(capacity_cfm[val]) * 1.7) * 100))/ 100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "capacity_cmh", capacity_cmh.slice(0,-3) );
});
frappe.ui.form.on('Quotation Item',"o_v_m_s",function(frm, cdt, cdn){
    var a = locals[cdt][cdn];
    var vel_pr ='';
    var o_v_m_s = a.o_v_m_s.split(' / ');
    for (let val in o_v_m_s) {
		vel_pr += cstr(Math.round(((0.5*1.2*flt(o_v_m_s[val])*flt(o_v_m_s[val])/9.81) * 100))/100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "vel_pr", vel_pr.slice(0,-3));
});
frappe.ui.form.on('Quotation Item',"capacity_cmh",function(frm, cdt, cdn){
    var b = locals[cdt][cdn];
    if(b.fan_type == "Single Skin"){
    var o__v_m__s ='';
    var capacity_cmh = b.capacity_cmh.split(' / ');
    for (let val in capacity_cmh) {
		o__v_m__s += cstr(Math.round((flt(capacity_cmh[val])/3600/(3.14/4*b.fan_dia_/1000*b.fan_dia_/1000)) * 100) / 100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "o_v_m_s", o__v_m__s.slice(0,-3));
    }
});
frappe.ui.form.on('Quotation Item',"fan_dia_",function(frm, cdt, cdn){
    var b = locals[cdt][cdn];
    if(b.fan_type == "Single Skin"){
    var o__v_m__s ='';
    var capacity_cmh = b.capacity_cmh.split(' / ');
    for (let val in capacity_cmh) {
		o__v_m__s += cstr(Math.round((flt(capacity_cmh[val])/3600/(3.14/4*b.fan_dia_/1000*b.fan_dia_/1000)) * 100) / 100)+' / ';
	}
    frappe.model.set_value(cdt, cdn, "o_v_m_s", o__v_m__s.slice(0,-3));
    }
});
frappe.ui.form.on('Quotation Item',"fan_bkw",function(frm, cdt, cdn){
    var c = locals[cdt][cdn];
    var suggested_bkw ='';
    var eff ='';
    var fan_bkw = c.fan_bkw.split(' / ');
    var static_pr = c.static_pr.split(' / ');
    var vel_pr = c.vel_pr.split(' / ');
    var capacity_cmh = c.capacity_cmh.split(' / ');
    for (let val in fan_bkw) {
		suggested_bkw += cstr(Math.round(flt(fan_bkw[val] *1.1) * 100) / 100)+' / ';
		eff += cstr(Math.round((((flt(capacity_cmh[val])/3600*(flt(static_pr[val])+flt(vel_pr[val]))/102/flt(fan_bkw[val]))) * 100) *100)/100)+'% / ';
	}
    frappe.model.set_value(cdt, cdn, "efficiency", eff.slice(0,-3));
    frappe.model.set_value(cdt, cdn, "suggested_bkw", suggested_bkw.slice(0,-3));
});
