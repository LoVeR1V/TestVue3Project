<template>
    
        <form action="" class = "container mb-3">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page title
                        </label>
                        <input
                        type="text"
                        class = "form-control"
                        v-model="pageTitle"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea 
                        type = "text"
                        class = "form-control"
                        rows="5"
                        v-model="content"
                        ></textarea>
                    </div>
                </div>  
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link Text
                        </label>
                        <input 
                        type="text" 
                        class="form-control"
                        v-model="linkText"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link URL
                        </label>
                        <input 
                        type="text" 
                        class="form-control"
                        v-model="linkUrl"
                        />
                    </div>
                    <div class="row mb-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="published">
                            <label for="gridCheck1" class="form-check-label">
                                Published
                            </label>
                        </div>
                    </div>    
                </div>
            </div>
        
            <div class="mb-3">
                <button 
                class="btn btn-primary"
                :disabled="isFormInvalid"
                @click.prevent="submitForm"
                >Create Page</button>
            </div>
        </form>
</template>

<script>
export default {
    // we using an array or an object in emits instead of props due to our custom events
    // emits has bigger opportunitties to handle with than props
    // it makes easier to develop and debugging
    emits: {
        PageCreated(pageTitle, content, link) {
            if (!pageTitle) {
                return false;
            }
            if (!content) {
                return false;
            }
            if (!link || !linkText || !linkUrl) {
                return false;
            }
            return true;
        }
    },
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    data() {
        // initialization values as empty strings
        return {
           pageTitle: '',
           content: '',
           linkText: '',
           linkUrl: '',
           published: true
        }
    },
    methods: {
        submitForm() {
            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                alert('Please fill the form');
                return;
            }
            // creating a custom event
            // $ means that is a public property 
            // emit is used to transfer user events from child components to parent components
            this.$emit('pageCreated', {
                pageTitle: this.pageTitle,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                // it needs to create a new item in navbar 
                published: this.published
             });
 
            // we don't need "this.pageCreated();" and anymmore because we create a custom event above
            // object {} from old event we relocate to custom event above


            // it needs to create a new item in navbar 
           this.pageTitle = '';
           this.content = '';
           this.linkText = '';
           this.linkUrl = '';
           this.published = true;
        }
    },
    //creating a watcher
    watch: {
        pageTitle(newTitle, oldTitle) {
            if (this.linkText === oldTitle) {
                this.linkText = newTitle;
            }
        }
    }

}
</script>