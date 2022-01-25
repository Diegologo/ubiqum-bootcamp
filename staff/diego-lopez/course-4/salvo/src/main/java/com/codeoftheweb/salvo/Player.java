package com.codeoftheweb.salvo;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

@Entity
public class Player {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
  @GenericGenerator(name = "native", strategy = "native")
  private long id;
  private String userName;
  private String email;
  
  public Player() { }
  
  public Player(String user, String email) {
    this.userName = user;
    this.email = email;
  }

  public long getPlayerId(){
    return id;
  } 
  public void setPlayerId(long id) {
    this.id = id;
  }
  
  public String getUserName() {
    return userName;
  }
  
  public void setUserName(String userName) {
    this.userName = userName;
  }
  public String toString() {
    return userName;
  }

  public String getEmail(){
    return email;
  }

  public void setEmail(String email){
    this.email = email;
  }
}