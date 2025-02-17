package com.scm.forms;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class UserForm {
    @NotBlank(message="Username is requried")
    @Size(min=3,message="Min 3 Character is requried")
    private String name;

    @Email(message="Invalid Mail Address")
    @NotBlank(message="Email is requried")
    private String email;

    @NotBlank(message="Password is Requried")
    @Size(min=6, message="Minimum 6 Characters is requried")
    private String password;

    @NotBlank(message="About is requried")
    private String about;

    @Size(min=8,max=12, message="Invalid Number")
    private String phoneNumber;

}
