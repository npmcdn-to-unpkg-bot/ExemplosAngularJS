package br.com.antares.contact;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.antares.util.vo.FilterVO;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> findAll(@Valid FilterVO filter) {
        filter.getRows();
        return repository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Contact add(@RequestBody Contact idea) {
        return repository.saveAndFlush(idea);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Contact findOne(@PathVariable Long id) {
        return repository.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Contact update(@PathVariable Long id, @RequestBody Contact idea) {
        Contact model = repository.findOne(id);
        if (model != null) {
            model.setName(idea.getName());
            model.setEmail(idea.getEmail());
            model.setPhone(idea.getPhone());
            model.setBirthday(idea.getBirthday());
            model.setGender(idea.getGender());
            return repository.saveAndFlush(model);
        }
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        repository.delete(id);
    }
}