import frappe

def update_attributes(doc, action):
    if doc.variant_of:
        for row in doc.attributes:
            if row.attribute == 'Fan Diameter':
                doc.fan_dia = row.attribute_value
            if row.attribute == 'Motor Insulation':
                doc.insulation = row.attribute_value
            if row.attribute == 'Motor KW':
                doc.kw = row.attribute_value
            if row.attribute == 'Motor RPM':
                doc.motor_rpm = row.attribute_value