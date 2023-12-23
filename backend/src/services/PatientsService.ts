import mongoose from "mongoose"
import { PatientsMongoCollection } from "../models/mongoose/PatientModel"
import { AppoitmentMongoCollection } from "../models/mongoose/AppoitmentModel"
import { ProceduresMongoCollection } from "../models/mongoose/ProcedureModel"
import { DoctorMongoCollection } from "../models/mongoose/DoctorModel"

class PatientService { 
    public async getPatientById(id: string) {
        const objId = new mongoose.Types.ObjectId(id)
        const patient = await PatientsMongoCollection.findById(objId)

        const appoitments = await AppoitmentMongoCollection.find({patient_id: objId})

        let myAppoitments: { [key: string]: any }[] = [];

        for(const appoitment of appoitments) {
            const procedure = await ProceduresMongoCollection.findOne({_id: appoitment?.procedure_id})
            const doctor = await DoctorMongoCollection.findOne({_id: appoitment?.doctor_id})
            const date = appoitment?.date
            const appointmentDetails = {
                "date": date,
                "procedure": procedure?.name,
                "doctor": doctor?.name + " " + doctor?.surname
            };
            console.log(appointmentDetails);
            
            myAppoitments.push(appointmentDetails);
        }
        console.log({ "name": patient?.name, "surname": patient?.surname,  "appoitments": myAppoitments});
        
        return { "name": patient?.name, "surname": patient?.surname,  "appoitments": myAppoitments}
    }

    public async getAllPatients() {
        const patients = await PatientsMongoCollection.find({})
        console.log(patients);
        
        const prettyPatients: { [key: string]: any }[] = []
        patients.forEach(patient => {
            const name = patient.name + " " + patient.surname
            const age = this.calculateAge(patient.birthdate)
            const card = patient.card
            const phone = patient.contact
            prettyPatients.push({
                "name": name,
                "age": age,
                "card": card,
                "phone": phone
            })
        });
        console.log(prettyPatients);
        
        return prettyPatients
    }

    private calculateAge(date: string): number {
        const [day, month, year] = date.split(".")
        const birthdate = new Date(`${year}-${month}-${day}`)
        const currentDate = new Date()
        const timediff = currentDate.getTime() - birthdate.getTime()
        const age = Math.floor(timediff / (365.25 * 24 * 60 * 60 * 1000));
        return age

    }
}

export const patientService = new PatientService()