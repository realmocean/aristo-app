import { ConfigService } from "./ConfigService";
import { HttpClient } from '@tuval/core';



export class RealmOceanBrokerClient {

    public static async GetCourses(): Promise<any> {
        return new Promise((resolve, reject) => {
            HttpClient.Post(ConfigService.GetRealmOceanBrokerUrl() + 'GetCourses')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetRealmCourses(realm_id: string): Promise<any> {
        const form = new FormData();
        form.append('realm_id', realm_id);
        return new Promise((resolve, reject) => {
            HttpClient.Post(ConfigService.GetRealmOceanBrokerUrl() + 'GetRealmCourses', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async GetCourseById(course_id: string): Promise<any> {
        const form = new FormData();
        form.append('course_id', course_id);
        return new Promise((resolve, reject) => {
            HttpClient.Post(ConfigService.GetRealmOceanBrokerUrl() + 'GetCourseById', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
    public static async GetCourseContentById(course_id: string): Promise<any> {
        const form = new FormData();
        form.append('course_id', course_id);
        return new Promise((resolve, reject) => {
            HttpClient.Post(ConfigService.GetRealmOceanBrokerUrl() + 'GetCourseContentById', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetLectureById(course_id: string, section_id: string, lecture_id: string): Promise<any> {
        const form = new FormData();
        form.append('course_id', course_id);
        form.append('section_id', section_id);
        form.append('lecture_id', lecture_id);
        return new Promise((resolve, reject) => {
            HttpClient.Post(ConfigService.GetRealmOceanBrokerUrl() + 'GetLectureById', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }




}