<template>
    <div class="pa-4">
    <v-row align="center">
    <v-col>
    <v-text-field label="Адрес нового подписчика" variant="outlined" v-model="newRecipientEmail"/>
    </v-col>
    <v-col sm="3">
    <v-btn class="mb-6" @click="addNewRecipient">
    Добавить подписчика
    </v-btn>
    </v-col>
    </v-row>
    <v-row>
    <v-col>
    <v-table fixed-header>
    <v-skeleton-loader :loading="loading" v-if="loading" type="table-thead" />
    <thead v-else class="primary">
      <th class="text-left">Email</th>
      <th class="text-center">Удалить</th>
    </thead>
    <v-skeleton-loader v-if="loading" :loading="loading" type="table-tbody" />
    <tbody v-else>
        <tr v-for="recipient in recipients" :key="recipient.email">
          <td class="text-left">
            {{ recipient.email }}
          </td>
          <td class="text-center">
            <v-btn variant="outlined" icon="mdi-trash-can" @click="deleteRecipient(recipient.email)"/>
          </td>
        </tr>
    </tbody>
    </v-table>
    </v-col>
    </v-row>
    </div>
</template>
<script setup lang="ts">
import { Api } from '../../generated-api/Api';

const recipients = ref([]);
const loading = ref(false);
const newRecipientEmail: Ref<string | null> = ref(null);
const api = new Api({baseUrl: 'https://api.banz-ai.ru'});
async function getRecipients(){
    loading.value = true;
    try {
    const {data, ok} = await api.recipients.getRecipients();
      if (ok){
          recipients.value = data;
      }
    }
    catch (e){
      console.log(e)
    }
    loading.value = false;
}
async function addRecipient(email){
    await api.recipients.addRecipient({email: email});
    await getRecipients();
}
async function deleteRecipient(email){
    await api.recipients.deleteRecipient({delete_email: email});
    await getRecipients();
}
function addNewRecipient(){
    if (newRecipientEmail?.value?.includes?.('@') && newRecipientEmail?.value?.includes?.('.'))
    addRecipient(newRecipientEmail.value);
}
onMounted(getRecipients)
</script>

