package dev.medi.meditime.service;

import dev.medi.meditime.model.dto.UserDTO;

public interface UserService {
    
    // 로그인
    String loginUser(UserDTO userDTO);

    // 회원 가입
    void insertUser(UserDTO userDTO);

    // 회원 정보 수정
    void updateUser(UserDTO userDTO);

    // 회원 탈퇴
    void deleteUser(UserDTO userDTO);

    // 회원 정보 조회
    UserDTO selectUser(UserDTO userDTO);



   
    
    
    //String validateEmail(String email);
}