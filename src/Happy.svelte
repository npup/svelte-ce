<script>

    let result = null;

    function ok() {
        result = true;
    }
    function no() {
        result = false;
    }

</script>

<svelte:options tag="shb-happy" />

<div>
    <p>Keep on smajling?</p>
    <div class="button-row">
        <button on:click={ ok }>Ok</button>
        <button on:click={ no }>No</button>
    </div>
    {#if null != result}
        <div class:ok={ result } class:no={ !result }>
            Result: { result }
        </div>
    {/if}
</div>


<style>
.ok {
    color: forestgreen;
}
.no {
    color: crimson;
}
p {
    color: tomato;
    font-size: 1.5em;
}
.button-row {
    display: flex;
    justify-content: space-evenly;
}
.button-row button {
    flex: 1;
}
</style>
