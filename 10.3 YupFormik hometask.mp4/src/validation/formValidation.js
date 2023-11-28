import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
    name: Yup.string().min(3).max(10).required("en azi 3 herf olmalidir"),
    unitPrice: Yup.number().positive("0dan boyuk eded olmalidir ve musbet eded olmalidir").required('unit price is required'),
    unitStock: Yup.number().positive("0dan boyuk eded olmalidir ve musbet eded olmalidir").required(),
    quantityUnit: Yup.string().min(3).max(10).required("min 3 simvol olmalidir"),
    isDiscounted: Yup.boolean("secim etmelisen")
});