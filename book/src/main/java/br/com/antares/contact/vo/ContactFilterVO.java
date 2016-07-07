package br.com.antares.contact.vo;

import java.io.Serializable;

import javax.ws.rs.QueryParam;

import br.com.antares.contact.Gender;
import br.com.antares.util.vo.FilterVO;

public class ContactFilterVO extends FilterVO implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @QueryParam("name")
    private String name;

    @QueryParam("email")
    private String email;

    @QueryParam("phone")
    private String phone;

    @QueryParam("gender")
    private Gender gender;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }
    
}
