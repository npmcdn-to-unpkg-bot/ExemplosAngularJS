package br.com.antares.util.vo;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

public class FilterVO implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @NotNull
    private Long page;
    
    @NotNull
    private Long rows;

    public Long getPage() {
        if (page == null) {
            page = 1L;
        }
        return page;
    }

    public void setPage(Long page) {
        this.page = page;
    }

    public Long getRows() {
        if (rows == null) {
            rows = 10L;
        }
        return rows;
    }

    public void setRows(Long rows) {
        this.rows = rows;
    }
    
}
