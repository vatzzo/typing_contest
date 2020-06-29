package zti.typing_contest.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import zti.typing_contest.model.Word;
import zti.typing_contest.service.WordService;

@RequestMapping("/words")
@RestController
public class WordController {
    private final WordService wordService;

    @Autowired
    WordController(WordService wordService){
        this.wordService = wordService;
    }

    @CrossOrigin
    @RequestMapping(value="", method = RequestMethod.GET)
    public @ResponseBody Iterable<Word> getWords() {
        Iterable<Word> words = wordService.getAllWords();
        return words;
    }

    @CrossOrigin
    @RequestMapping(value="{id}", method = RequestMethod.GET)
    public @ResponseBody Word getWordById(@PathVariable("id") Integer id) {
        return wordService.getWordById(id).orElse(null);
    }

    @CrossOrigin
    @RequestMapping(value="", method = RequestMethod.POST)
    public void addWord(@RequestBody Word newWord) {
        wordService.addWord(newWord);
    }

    @CrossOrigin
    @RequestMapping(value="{id}", method = RequestMethod.DELETE)
    public void deleteWord(@PathVariable("id") Integer id) {
        wordService.deleteWord(id);
    }

}
