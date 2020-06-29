
package zti.typing_contest.model;

import javax.persistence.*;


/***
 * This class implements a word in both languages versions ( polish and english ). It is a JPA entity class, which is responsible for modeling words.
 * @author Mateusz
 * @version 1.0
 */
@Entity
@Table(name="words")
public class Word {
    private String PL;
    private String EN;
    private Integer id;

    public Word() { }

    /***
     * This method returns id parameter of a given word.
     * @return id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    /***
     * Method is used to set the id of a particular word.
     * @param id word id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /***
     * This method returns the english version of a given word.
     * @return EN word in english language
     */
    public String getEN() {
        return EN;
    }

    /***
     * Method is used to set the english version of a particular word.
     * @param EN word in english language
     */
    public void setEN(String EN) {
        this.EN = EN;
    }

    /***
     * This method returns the polish version of a given word.
     * @return PL word in polish language
     */
    public String getPL() {
        return PL;
    }

    /***
     * Method is used to set the polish version of a particular word.
     * @param PL word in polish language
     */
    public void setPL(String PL) {
        this.PL = PL;
    }
}
