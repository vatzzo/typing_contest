package zti.typing_contest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import zti.typing_contest.model.Word;
import zti.typing_contest.repository.WordRepository;

import java.util.Optional;

/***
 * This class
 * @author Mateusz
 * @version 1.0
 */
@Service
public class WordService {
    private final WordRepository wordRepository;

    @Autowired
    WordService(@Qualifier("jpa") WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    /***
     * Method that returns all words from repository.
     * @return words in both languages version
     */
    public Iterable<Word> getAllWords() {
        return wordRepository.findAll();
    }

    /***
     * Method that returns only the word that was chosen by id parameter from repository.
     * @param id id of the word from repository
     * @return word a word from repository in both languages version
     */
    public Optional<Word> getWordById(Integer id) {
        return wordRepository.findById(id);
    }

    /***
     * This method allow to add a new word to repository.
     * @param word is an object based on Word class.
     *
     */
    public int addWord(Word word) {
        wordRepository.save(word);
        return 1;
    }

    /***
     * Method that removes a word from repository by its id.
     * @param id id of the word from repository
     *
     */
    public int deleteWord(Integer id) {
        wordRepository.deleteById(id);
        return 1;
    }

}
